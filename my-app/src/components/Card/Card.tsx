type CardProps = {
    title: string
    text : string
    onClick?: () => void
}

export function Card({title, text, onClick} : CardProps){
    return (
        <>
        <div className="title-containter" onClick={onClick}>
            {title}
        </div>
        <div className="text-container">
            {text}
        </div>
        </>
    )
}