# Back End Developer Assignment #

Buatlah suatu API Server dengan kriteria sebagai berikut:

### Task ###

* Terdapat 2 Model: `Student` dan `Classroom`
* Attribute `Student` terdiri dari `First Name`, `Last Name`, `Classroom`, `Gender`.
* Attribute `Classroom` terdiri dari `Class Name`.
* Dapat melakukan query single data `Student` dan `Classroom` berdasarkan `ID`-nya.
* Dapat melakukan query list of `Student`.
  * Data yang ditampilkan dapat di-filter berdasarkan `Classroom` dan `Gender`. 

    ```graphql
    query {
      students(where: {
        gender: "MALE",
        classRoom: "7B"
      }) {
        id
        ...
      }
    }
    ```

  * Data yang ditampilkan dapat diurutkan berdasarkan `First Name`, `Last Name` dan `Gender`.
        
    ```graphql
    query {
      students(sort: {
        firstName: "ASC",
        lastName: "DESC",
        gender: "DESC"
      }) {
        id
        ...
      }
    }
    ```

* Dapat melakukan query list of `Classroom`.
  * Data yang ditampilkan dapat diurutkan berdasarkan `Class Name`.
          
    ```graphql
    query {
      classRooms(sort: {
        className: "ASC"
      }) {
        id
        ...
      }
    }
    ```

* Dapat melakukan mutasi `CRUD` data `Student`.

  ```graphql   
  mutation {
    createStudent(form: {
      firstName: "John",
      lastName: "Doe",
      ...
    }) {
      id
      ...
    }
  }

  mutation {
    updateStudent(
      id: String!,
      form: {
        firstName: "John",
        lastName: "Doe",
        ...
      }
    ) {
      id
      ...
    }
  }

  mutation {
    deleteStudent(id: String!)
  }
  ```

* Dapat melakukan mutasi `CRUD` data `Class Room`.
          
  ```graphql
  mutation {
    createClassroom(name: String!) {
      id
      ...
    }
  }

  mutation {
    updateClassroom(id: String!, name: String) {
      id
      ...
    }
  }

  mutation {
    deleteClassroom(id: String!)
  }
  ```


* Dapat melakukan mutasi `assignToClass` dengan parameter `ID of Student` dan `ID of Classroom`, yang berfungsi untuk memasukkan `Student` ke dalam suatu `Classroom`.  
Jika `Student` tersebut sebelumnya sudah memiliki `Classroom`, maka data lamanya akan terganti menjadi data yang baru.

  ```graphql
  mutation {
    assignClassroom(studentId: String!, classroomId: String!)
  }
  ```

### Ketentuan ###

* API Server menggunakan bahasa pemrograman `Javascript` - `NodeJS`. Diperbolehkan menggunakan framework.
* Menggunakan Query Language `GraphQL`.
* Menggunakan `PostgreSQL` sebagai databasenya.
* (Optional) Menggunakan `sequelize` sebagai ORM-nya
* Hasil assignment dapat di submit ke code repository ini.  
Dihimbau untuk melakukan commit dan push setiap harinya (atau berkala di setiap development step), sehingga kami dapat memantau dan menilai performa kandidat berdasarkan dari setiap commit yang dilakukan.
* Jika terdapat pertanyaan lain dapat menghubungi developer@asaren.ai atau melalui whatsapp ke HR terkait.
* **Deadline untuk assignment ini adalah: Thursday, 16 Juni 2022 23:59:59 WIB**
