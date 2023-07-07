import { useEffect, useState } from 'react'
import GroupDetailHeader from '@/components/groups/GroupDetailHeader'
import Container from '@/components/layout/Container'
import Grid from '@/components/common/grid/Grid'
import api from '@/utils/api'
import { useRouter } from 'next/router'


const GroupDetail = ({ showAllImages, deleteGroup, members }) => {
    const { query } = useRouter()
    
    const [group, setGroup] = useState(null)
    const [images, setImages] = useState([]);

    
    useEffect(() => {
        getGroup();
    }, [])

    const getGroup = async () => {
        try {
            const group = await api.get('/group/' + query.id);
            setGroup(group);
            setImages(group.images);
        } catch (err) {
          console.log(err);
        }
    }

    return (
        <Container>
            {
                group && (
                    <>
                        <GroupDetailHeader isPrivate={true} showAllImages={showAllImages} title={group.title} deleteGroup={() => deleteGroup(group._id)} members={members} />
                        <Grid images={images} />
                    </>
                )
            }
        </Container>
    )
}

export default GroupDetail;

