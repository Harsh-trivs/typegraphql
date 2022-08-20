import { ApolloServer } from "apollo-server";
import { buildSchema} from "type-graphql";
import "reflect-metadata";
import resolvers from "./resolvers/index";


const main = async () => {
    const schema = await buildSchema({resolvers});

    const server = new ApolloServer({
        schema,
    });

    server.listen(8000, () =>
        console.log(`Server running: http://localhost:8000`)
    )
};

main()