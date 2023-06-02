import {create} from 'zustand';

import {devtools, persist} from 'zustand/middleware'

const memberStore = (set) => ({
    members: [],
    addMember: (member) => {
        set((state) => ({
            members: [member, ...state.members],
        }))
    },
    removeMember: (memberId) => {
        set((state) => ({
            members: state.members.filter((c) => c.id !== memberId)
        }))
    },
    toggleMemberStatus: (memberId) => {
        set((state) => ({
            members: state.members.map((member) => member.id === memberId ? {...member, completed: !member.completed} : member)
        }))
    }
})

const useMemberStore = create(
    devtools(
        persist(memberStore, {
            name: "members",
        })
    )
)


export default useMemberStore;