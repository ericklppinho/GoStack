import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await api.get('projects');
                setProjects(response.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    async function handleAddProject() {
        try {
            const response = await api.post('projects', {
                title: `Novo Projeto ${Date.now()}`,
                owner: 'Erick Pinho'
            });

            if (response.status === 200)
                setProjects([...projects, response.data]);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1' />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />

                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>

            {/* <View style={styles.container}>
                <Text style={styles.title}>Projects</Text>
                {projects.map(project => (
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                ))}
            </View> */}
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1'
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    },
    project: {
        color: '#fff',
        fontSize: 30
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});