import { AppDataSource } from "./data-source"
import { TipoUsuario, Usuarios } from "./entity/Usuarios"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    // const user = new Usuarios()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Usuarios, {where: {
        altera_valor_receber: true
    }});

    if (users.length > 0 ) {
        console.log(users[0], '  -- altera_valor_receber: ', users[0].altera_valor_receber)
    }
    // console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
