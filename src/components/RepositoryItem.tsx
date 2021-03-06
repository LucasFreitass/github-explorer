interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem (props: RepositoryItemProps) {
    return (
        <li> 
                    <strong>{props.repository.name}</strong> {/* Verificação, caso o props.repository seja vazio, usar o default*/}
                    <p>{props.repository.description}</p>

                    <a href={props.repository.html_url}>
                        Acessar repositório
                    </a>
                </li>
    )
}