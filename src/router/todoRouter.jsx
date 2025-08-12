import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import ModifyPage from "../pages/todo/ModifyPage.jsx";

const Loading = <div>Loading...</div>
const TodoList = lazy(() => import('../pages/Todo/ListPage'))
const TodoRead = lazy(() => import('../pages/Todo/ReadPage'))
const AddPage = lazy(() => import('../pages/Todo/AddPage'))


const todoRouter = () => {
    return [
        {
            path: 'list',
            element: (
                <Suspense fallback={Loading}>
                    <TodoList />
                </Suspense>
            )
        },
        {
            path: "",
            element: <Navigate replace to="list"/>
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={Loading}><TodoRead/></Suspense>
        },
        {
            path: "modify/:tno",
            element: <Suspense fallback={Loading}><ModifyPage/></Suspense>
        },
        {
            path: 'add',
            element: (
                <Suspense fallback={Loading}>
                    <AddPage />
                </Suspense>
            )
        },
    ]
}

export default todoRouter;