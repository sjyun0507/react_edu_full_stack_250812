import {useNavigate} from "react-router-dom";

const modifyPage = ({tno}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const movetoRead = () => {
        navigate({pathname: `/todo/read/${tno}`})
    }

    const moveToList = () => {
        navigate({pathname: `/todo/list`})
    }
    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page Component {tno}
        </div>
    )

}
export default modifyPage;