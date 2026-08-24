// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";

// function Modal() {
//   const [show, setShow] = useState(flase);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <div className="flex justify-center items-center fixed top-0 w-screen h-screen bg-gray-500 bg-opacity-50">
//         <div className="min-h-400px ${getWidth} bg-white">
//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Are You Sure that you want to delete?</Modal.Title>
//             </Modal.Header>
//             <Modal.Body> This action is permanent!</Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Cancel
//               </Button>
//               <Button variant="danger" onClick={handleDelete}>
//                 Delete
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Modal;
