import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = ({ count = 5 }: { count?: number }) => {
    return <div style={{ display: "grid", gridTemplateColumns: "22% 22% 22% 22%", gap: "4%", width: "1200px" }}>
        <Skeleton count={count} />
        <Skeleton count={count} />
        <Skeleton count={count} />
        <Skeleton count={count} />
    </div>
}

export default LoadingSkeleton