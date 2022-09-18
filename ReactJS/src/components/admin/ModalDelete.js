import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter text-center">
                    Delete Categorie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="text-center text-danger">
                    هل انت متأكد من الحذف ؟
                    <br />
                    <span className="text-dark">
                        {/* {props.name} */}

                        {props.id}
                    </span>

                    <br />
                    {/* <img
                        className="rounded-circle m-3"
                        width={100}
                        height={100}
                        src={`http://localhost:8000/cover/${props.img}`}
                    /> */}
                </h4>
                <p></p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button className="btn btn-danger" 
                onClick={props.onDelete}>
                    Yes Delete
                </Button>

                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};



export default MyVerticallyCenteredModal;
