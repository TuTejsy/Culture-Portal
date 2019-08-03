import { Link } from "gatsby"
import React from 'react'

import Image from "./Image"
import StudentCards from './StudentCards';

const Main = ({ lang }) => (
  <>
    <h1>{lang}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/search/" state={{ lang }}>Go to page 2</Link>
      <StudentCards />
  </>
)

export default Main