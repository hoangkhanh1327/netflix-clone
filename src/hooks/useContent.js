import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../contexts/FirebaseContext';

const useContent = (target) => {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const getData = async () => {
            try {
                const snapshot = await firebase
                    .firestore()
                    .collection(target)
                    .get();

                const allContents = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContents);
            } catch (error) {
                console.log(error.message);
            }
        };

        getData();
    }, []);

    return { [target]: content };
};

export default useContent;
