import React from 'react'
import { Layout } from './src/components/Layout'
import 'normalize.css'
import './src/styles/sandbox.scss'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
