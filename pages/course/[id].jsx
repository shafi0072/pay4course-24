
import { useRouter } from 'next/router'
import CourseDetails from '../../src/Components/app/Home/Courses/CourseDetails/CourseDetails'
export default function Home() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <CourseDetails id={id}/>
    </>
  )
}