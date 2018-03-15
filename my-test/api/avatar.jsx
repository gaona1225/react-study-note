class Avatar extends React.Component {
    console.log('Component');
    render() {
        return (
            <div className = 'UserInfo'>
                <img className = 'Avatar' src = {this.props.author.avatarUrl} alt = {this.props.author.name} />
                <div className = 'UserInfo-name'>{this.props.author.name}-22</div>
            </div>
        )
    }
}

console.log('Avatar');

export default Avatar;