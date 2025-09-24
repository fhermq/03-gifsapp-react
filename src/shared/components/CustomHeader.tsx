interface PropsCustomHeader {
    title: string;
    description?: string;
}

export const CustomHeader = ({title, description}: PropsCustomHeader) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            {
                description && <p>{description}</p>
            }
        </div>
    )
}
