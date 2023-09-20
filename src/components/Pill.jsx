import '../css/Pill.css'

function Pill(props) {

    const { text } = props;

    return(
        <span className='pill'>
            {text}
        </span>
    )
}

export default Pill;