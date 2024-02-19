// eslint-disable-next-line react/prop-types
export default function WayToTeach({title, description}) {
    return (
        <li className="li">
            <p>

                <strong>{title}</strong>{description}
            </p>
        </li>
    )
}