---
author: giboow
title: 'SpringBoot -  Contextualiser la serialisation'
date: '2022-02-28'
keywords:
    - SpringBoot
    - API
    - JSON
    - Jackson
    - Filter
image: /static/images/post/tyler-nix-WVl1N2C2zEA-unsplash.jpg
---

À chaque fois que j’ai développé une API, je me suis confronté au même problème : comment filtrer les données en fonction de mes appels API.

En effet, certains appels qui sont disponibles par exemple pour appel “utilisateur” ne rendront pas les mêmes données qu’un appel disponible pour un “administrateur”.

# Le projet

Pour commencer, nous allons construire une API REST pour la gestion des véhicules, nous aurons donc un objet “**Vehicle”** qui sera constitué de la façon suivante :

- Id: Long
- brand: String ⇒ La marque, par exemple (Renault)
- model: String ⇒ Le model, par exemple (Megane)
- registrationPlate: String  ⇒ La plaque d’immatriculation de la voiture, par exemple (SP-800-TT)
- Serial number : String ⇒ Le numéro de série du véhicule

Ces données pourront être lues par n’importe quel utilisateur. Nous définirons en plus des données dont l’utilisateur n’a pas besoin, mais que l’administrateur peut consulter :

- CreatedAt : LocalDatetime ⇒ Date de création de l’objet en base de données
- UpdatedAt : LocalDatetime ⇒ Date de modification de l’objet en base de données

Pour gagner du temps lors de mes développements, je définis une Class abstraite qui me sert de base a l’ensemble de mes entités :

```java
@MappedSuperclass
@Data
@SuperBuilder
@NoArgsConstructor
public abstract class EntityAbstract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(nullable = false, columnDefinition = "timestamp default now()")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss'Z'", timezone="UTC")
    LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false, columnDefinition = "timestamp default now()")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss'Z'", timezone="UTC")
    LocalDateTime updatedAt;

}
```

Puis je définis ma classe Vehicle :

```java
@Entity
@Data
public class Vehicle extends EntityAbstract {

    @NotEmpty
    @Column(nullable = false)
    String registrationPlate;

    @NotEmpty
    @Column(nullable = false)
    String model;

    @NotEmpty
    @Column(nullable = false)
    String brand;

		@NotEmpty
    @Column(nullable = false)
    String serialNumber;
}
```

Enfin nous définirons un Controller qui permettra d’accéder aux données à l’aide d’un service de récupération des données avec une route utilisateur ainsi qu’une route Admin :

```java
@RestController
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/vehicle/list")
    public List<Vehicle> listVehicles() {
        return vehicleService.listVehicles();
    }

    @GetMapping("/admin/vehicle/list")
    public List<Vehicle> adminListVehicles() {
        return vehicleService.listVehicles();
    }
}
```

Pour le moment, le rendu des données est exactement le même, mais nous allons voir par la suite comment “filter” les données.

# Jackson à la rescousse!

Pour filtrer les données, nous allons utiliser une fonctionnalité de la librairie Jackson, les JsonView!

Nous devons définir une classe contenant des interfaces qui correspondent aux niveau des filtres de notre API :

```java
/**
 * Json view filter
 */
public class JsonViews {
	  public interface Create {}
    public interface Update extends Create{}
    public interface Summary extends Update{}
    public interface Admin extends Summary{}
}
```

Le niveau “**Create”** correspond aux attributs visibles pour la création d’un objet, “**Update”** étend du filtre précédent et permettra de filtrer uniquement les attributs qui peuvent être mis à jour. **“Summary”,** étend des propriété de **“Create”** et **”Update”.** Enfin “**Admin”** permet de visualiser ou de mettre à jour des attributs uniquement accessibles aux Administrateurs.

Cette fonctionnalité sert non seulement au rendu d’un JSON, que lorsque l’API consomme le Body d’une requête.

Nous allons mettre à jour l’entité pour que les attributs soient filtrés correctement par l’API :

```java
@MappedSuperclass
@Data
@SuperBuilder
@NoArgsConstructor
public abstract class EntityAbstract {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonView(JsonViews.Update.class)
    private Integer id;

    @CreatedDate
    @Column(nullable = false, columnDefinition = "timestamp default CURRENT_TIMESTAMP")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss'Z'", timezone="UTC")
    @JsonView(JsonViews.Admin.class)
    LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false, columnDefinition = "timestamp default CURRENT_TIMESTAMP")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss'Z'", timezone="UTC")
    @JsonView(JsonViews.Admin.class)
    LocalDateTime updatedAt;

}
```

```java
@Entity
@Data
public class Vehicle extends EntityAbstract {

    @NotEmpty
    @Column(nullable = false)
    @JsonView(JsonViews.Create.class)
    String registrationPlate;

    @NotEmpty
    @Column(nullable = false)
    @JsonView(JsonViews.Create.class)
    String model;

    @NotEmpty
    @Column(nullable = false)
    @JsonView(JsonViews.Create.class)
    String brand;

    @NotEmpty
    @Column(nullable = false)
    @JsonView(JsonViews.Create.class)
    String serialNumber;
}
```

Enfin nous pouvons l’utiliser dans le controller :

```java
@RestController
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

		/**
     * List véhicles
     */
    @GetMapping("/vehicle/list")
    @JsonView(JsonViews.Summary.class)
    public List<Vehicle> listVehicles() {
        return vehicleService.listVehicles();
    }

		/**
     * List vehicles (Admin)
     */
    @GetMapping("/admin/vehicle/list")
    @JsonView(JsonViews.Summary.class)
    public List<Vehicle> adminListVehicles() {
        return vehicleService.listVehicles();
    }

		/**
     * Create vehicle (Admin)
     */
    @PostMapping("/admin/vehicle")
    @JsonView(JsonViews.Admin.class)
    public Vehicle postAdminVehicle(@JsonView(JsonViews.Create.class) Vehicle vehicle) {
        return vehicleService.createVehicle(vehicle);
    }

		/**
     * Update vehicle (Admin)
     */
    @PutMapping("/admin/vehicle")
    @JsonView(JsonViews.Admin.class)
    public Vehicle putAdminVehicle(@JsonView(JsonViews.Update.class) Vehicle vehicle) {
        return vehicleService.updateVehicle(vehicle);
    }

}
```

# Résultat

## Liste des véhicules (Vue utilisateur)

```bash
~ curl http://localhost:8080/vehicle/list
[{"id":1,"registrationPlate":"AA-205-AA","model":"205","brand":"PEUGEOT","serialNumber":"3KX9YLH2K980HNYYS1YZ"},{"id":2,"registrationPlate":"AA-206-AA","model":"206","brand":"PEUGEOT","serialNumber":"VST52ASAH145TIZGJ3LC"},{"id":3,"registrationPlate":"AA-207-AA","model":"207","brand":"PEUGEOT","serialNumber":"JI0BNW8D1HYGPFAECEPJ"},{"id":4,"registrationPlate":"AA-208-AA","model":"208","brand":"PEUGEOT","serialNumber":"LN97FF02UWRJYRAEGFL5"},{"id":5,"registrationPlate":"AA-106-AA","model":"106","brand":"PEUGEOT","serialNumber":"R94DJ8P5PT7M6PB5DP5B"},{"id":6,"registrationPlate":"AA-107-AA","model":"107","brand":"PEUGEOT","serialNumber":"OJHHEW2SP2KJDU3CZLFO"},{"id":7,"registrationPlate":"AA-108-AA","model":"108","brand":"PEUGEOT","serialNumber":"49LUMOTWMOQSNHK09MR3"},{"id":8,"registrationPlate":"AA-306-AA","model":"306","brand":"PEUGEOT","serialNumber":"0KBBBHVTZN9P66I8TVGT"},{"id":9,"registrationPlate":"AA-307-AA","model":"307","brand":"PEUGEOT","serialNumber":"TK0GX92MY29AR0H9ZYIB"},{"id":10,"registrationPlate":"AA-308-AA","model":"308","brand":"PEUGEOT","serialNumber":"EKNPA002KCQXYAUX04AV"},{"id":11,"registrationPlate":"AA-309-AA","model":"309","brand":"PEUGEOT","serialNumber":"D1788D08RU0AU3O5BVXR"},{"id":12,"registrationPlate":"AA-405-AA","model":"405","brand":"PEUGEOT","serialNumber":"PHU0M7NKZ799D64VBVJ8"},{"id":13,"registrationPlate":"AA-406-AA","model":"406","brand":"PEUGEOT","serialNumber":"NAD3F2ULL5TY4QCECLAO"},{"id":14,"registrationPlate":"AA-407-AA","model":"407","brand":"PEUGEOT","serialNumber":"C842THXCOBFFZ0O5U0YK"},{"id":15,"registrationPlate":"AA-508-AA","model":"508","brand":"PEUGEOT","serialNumber":"F0T2ELSQ0VPRF1NBY8XH"},{"id":16,"registrationPlate":"AA-407-AA","model":"407","brand":"PEUGEOT","serialNumber":"WEBVP95ON3HDX0TGPFXB"},{"id":17,"registrationPlate":"AA-508-AA","model":"508","brand":"PEUGEOT","serialNumber":"TEZ3D70UDBY8UKHRKSYY"},{"id":18,"registrationPlate":"AA-605-AA","model":"605","brand":"PEUGEOT","serialNumber":"WIGYNFTWH0Q6E85Z2HA2"},{"id":19,"registrationPlate":"AA-607-AA","model":"607","brand":"PEUGEOT","serialNumber":"OLI3JCTF82WUQK14Z295"}]
```

## Liste des Véhicules (Vue Admin)

```bash
~ curl http://localhost:8080/admin/vehicle/list
[{"id":1,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-205-AA","model":"205","brand":"PEUGEOT","serialNumber":"3KX9YLH2K980HNYYS1YZ"},{"id":2,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-206-AA","model":"206","brand":"PEUGEOT","serialNumber":"VST52ASAH145TIZGJ3LC"},{"id":3,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-207-AA","model":"207","brand":"PEUGEOT","serialNumber":"JI0BNW8D1HYGPFAECEPJ"},{"id":4,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-208-AA","model":"208","brand":"PEUGEOT","serialNumber":"LN97FF02UWRJYRAEGFL5"},{"id":5,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-106-AA","model":"106","brand":"PEUGEOT","serialNumber":"R94DJ8P5PT7M6PB5DP5B"},{"id":6,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-107-AA","model":"107","brand":"PEUGEOT","serialNumber":"OJHHEW2SP2KJDU3CZLFO"},{"id":7,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-108-AA","model":"108","brand":"PEUGEOT","serialNumber":"49LUMOTWMOQSNHK09MR3"},{"id":8,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-306-AA","model":"306","brand":"PEUGEOT","serialNumber":"0KBBBHVTZN9P66I8TVGT"},{"id":9,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-307-AA","model":"307","brand":"PEUGEOT","serialNumber":"TK0GX92MY29AR0H9ZYIB"},{"id":10,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-308-AA","model":"308","brand":"PEUGEOT","serialNumber":"EKNPA002KCQXYAUX04AV"},{"id":11,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-309-AA","model":"309","brand":"PEUGEOT","serialNumber":"D1788D08RU0AU3O5BVXR"},{"id":12,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-405-AA","model":"405","brand":"PEUGEOT","serialNumber":"PHU0M7NKZ799D64VBVJ8"},{"id":13,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-406-AA","model":"406","brand":"PEUGEOT","serialNumber":"NAD3F2ULL5TY4QCECLAO"},{"id":14,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-407-AA","model":"407","brand":"PEUGEOT","serialNumber":"C842THXCOBFFZ0O5U0YK"},{"id":15,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-508-AA","model":"508","brand":"PEUGEOT","serialNumber":"F0T2ELSQ0VPRF1NBY8XH"},{"id":16,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-407-AA","model":"407","brand":"PEUGEOT","serialNumber":"WEBVP95ON3HDX0TGPFXB"},{"id":17,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-508-AA","model":"508","brand":"PEUGEOT","serialNumber":"TEZ3D70UDBY8UKHRKSYY"},{"id":18,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-605-AA","model":"605","brand":"PEUGEOT","serialNumber":"WIGYNFTWH0Q6E85Z2HA2"},{"id":19,"createdAt":"2022-02-28T14:32:13Z","updatedAt":"2022-02-28T14:32:13Z","registrationPlate":"AA-607-AA","model":"607","brand":"PEUGEOT","serialNumber":"OLI3JCTF82WUQK14Z295"}]
```

## Création de véhicule

```bash
~ curl --location --request POST 'localhost:8080/admin/vehicle' \
--header 'Content-Type: application/json' \
--data-raw '{
    "brand": "VolksWagen",
    "model": "Golf",
    "serialNumber": "VWVWVWVWVWVWVW",
    "registrationPlate": "GO-123-LF"
}'
{"id":20,"createdAt":"2022-02-28T15:34:03Z","updatedAt":"2022-02-28T15:34:03Z","registrationPlate":"GO-123-LF","model":"Golf","brand":"VolksWagen","serialNumber":"VWVWVWVWVWVWVW"}
```

## Mise a jour de véhicule

```bash
~ curl --location --request PUT 'localhost:8080/admin/vehicle' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 20,
    "brand": "VolksWagen",
    "model": "Golf SW",
    "serialNumber": "VWVWVWVWVWVWVW",
    "registrationPlate": "GO-123-LF"
}'
{"id":20,"createdAt":"2022-02-28T15:40:55Z","updatedAt":"2022-02-28T15:40:55Z","registrationPlate":"GO-123-LF","model":"Golf SW","brand":"VolksWagen","serialNumber":"VWVWVWVWVWVWVW"}
```

Vous pouvez retrouver le github du projet ici : [https://dev.to/giboow/springboot-contextualizing-serialization-29mp](https://dev.to/giboow/springboot-contextualizing-serialization-29mp)

Crédit photo : https://unsplash.com/photos/WVl1N2C2zEA
