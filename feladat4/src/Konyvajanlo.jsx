export default function Konyvajanlo({ nev, ar, akcio = false }) {
    return (
        <div className="keret">
            <h3>Cím: {nev}</h3>
            <p className={akcio ? 'akcio' : ''}>
            Ár: {ar} Ft
            </p>
        </div>
    )
}