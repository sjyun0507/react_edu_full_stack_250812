import ListComponent from "../../components/todo/ListComponent.jsx";

const ListPage = () => {

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo List Component
            </div>
            <ListComponent/>
        </div>
    )
}

export default ListPage;