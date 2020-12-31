const SplitPane = ({ left, right }) => {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {left}
            </div>
            <div className="SplitPane-right">
                {right}
            </div>
        </div>
    );
}

export default SplitPane;