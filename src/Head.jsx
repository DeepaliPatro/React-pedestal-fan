import './Head.css'

export default function Head({spin}) {
    return (
        <div className="head">
            <svg height="300" width="300" className={spin} >
                <ellipse cx="225" cy="150" rx="55" ry="35" fill="lightseagreen" />
                <ellipse cx="75" cy="150" rx="55" ry="35" fill="lightseagreen" />
                <ellipse cx="150" cy="75" rx="35" ry="55" fill="lightseagreen" />
                <ellipse cx="150" cy="225" rx="35" ry="55" fill="lightseagreen" />
            </svg>
            <div className="cover"></div>
        </div>
    )
}