import dl_icon from './image/dl.png

export default function Download({ slug }) {
    return (
        <a href={`https://github.com/wikibook/${slug}/`}>
            <img src={dl_icon} alt="Sample Download" />
        </a>
    );
}