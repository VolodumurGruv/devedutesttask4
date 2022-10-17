export default function Modal(props) {
	return props.shown ? (
		<div className="modal-bg">
			<div className="modal-active">
				<h1>Modal</h1>
				<button className="btn" onClick={props.close}>
					Close
				</button>
			</div>
		</div>
	) : null;
}
