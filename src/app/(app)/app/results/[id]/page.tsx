import ParticipantComponent from "@/components/app/screens/results/participant/ParticipantComponent"

export default function Index({ params }: { params: { id: string } }) {
  return <ParticipantComponent id={params.id || ''}/>
}