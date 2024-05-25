import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <h1>HOMEPAGE</h1>
            <p>registered users with some contacts:</p>
            <p>user1234567@g.com</p>
            <p>user123456@g.com</p>
            <p>user12345@g.com</p>
        </div>
    )
}

export default HomePage