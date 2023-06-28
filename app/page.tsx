import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/actions";

type ProjectSearch = {
    projectSearch: {
        edges: { node: ProjectInterface }[],
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }

    }
}
const Home = async () => {

    const data = await fetchAllProjects() as ProjectSearch;

    const projectToDisplay = data?.projectSearch?.edges || [];
    if (projectToDisplay.length === 0) {
        return (
            <section className="flexStart flex-col paddings">
                categories

                <p className="no-result-text text-center">No projects found, go create some first.</p>
            </section>
        )
    }
    return (
        <section className="flex-start flex-col paddings mb-16">
            <h1>categories</h1>
            <h1>posts</h1>
            <h1>LoadMore</h1>
        </section>
    )
}

export default Home;