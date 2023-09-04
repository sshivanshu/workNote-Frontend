import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Anand Auto Services</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Varanasi, Anand Auto Agency  provides a trained staff ready to fix your problem.</p>
                <address className="public__addr">
                Anand Auto Agency<br />
                    BHU, lanka road <br />
                    Varanasi, UP<br />
                    <a href="tel:+91555555555">(+91) 555-5555</a>
                </address>
                <br />
                <p>Owner: Anand Singh</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public