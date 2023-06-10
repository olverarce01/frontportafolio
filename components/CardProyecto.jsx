'use client'
import { Card } from 'react-bootstrap';
import styles from './CardProyecto.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as LinkWeb } from '@mui/icons-material';
import Link from 'next/link'
import Button from './Button';

export default function CardProyecto({src, repo, id, type, title,body,date}) {
  return (
    <Card className={styles.card}>
        <Card.Body>
          <Card.Title className={styles.nombre}>{type}</Card.Title>
          <Card.Title className={styles.nombre}>
            {title}
            <a href={src} className={styles.link} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large"/>
            </a>
            {repo=='/'?'':<a href={repo} className={styles.link} target="_blank" rel="noopener noreferrer">
              <LinkWeb fontSize="large" /> 
            </a>}
            
          </Card.Title>
          <i className={styles.body}>{date}</i>
          <Card.Text className={styles.body}>{body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link href={`/proyectos/${id}`}><Button value={'+'}/></Link>
        </Card.Footer>
      </Card>
  )
}
