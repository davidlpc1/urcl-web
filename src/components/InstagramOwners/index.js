import styles from "../../../styles/components/InstagramOwners.module.scss";
import Image from 'next/image';

export default function InstagramOwners() {
  const owners = [
    { name: "davidlpc1", image: "/davi.png" },
    {
      name: "jc_batista22",
      image:"/jc.png",
    },
    {
      name: "enzopegorettebjjpro",
      image:"/enzo.png"
    },
    {
      name: "nicolas_reis83",
      image:"/nick.png",
    },
    {
      name: "diassouzamatheus",
      image:"/matheus.png",
    },
  ];
  return (
    <div className={styles.listContainer}>
        <h3>Instagram of Owners</h3>
        <ul >
            {
                owners.map(owner => (
                    <li key={owner.name}>
                        <Image src={`${owner.image}`} width={100} height={100} />
                        <p>{owner.name}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
