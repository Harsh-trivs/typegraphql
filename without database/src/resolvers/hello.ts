import { Query, Resolver } from "type-graphql";

@Resolver()
class Helloworld{
    @Query(()=>String)
    async hello(){
        return "hello welcome to session";
    }
}

export default Helloworld