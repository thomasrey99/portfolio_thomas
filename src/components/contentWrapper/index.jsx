const ContentWrapper = ({ children }) => {
    return (
        <div className="max-w-[120rem]  m-auto w-[92%] px-[2rem] py-[4rem] sm:p-[4rem]">
            {children}
        </div>
    )
}

export default ContentWrapper;