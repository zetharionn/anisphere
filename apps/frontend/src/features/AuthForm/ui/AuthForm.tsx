import { type FC, memo } from 'react'
import { useAuthFormStore } from '../model'
import { Email } from './Email'
import { Options } from './Options'

export const AuthForm: FC = memo(() => {
	const formMode = useAuthFormStore(state => state.formMode)
	const formType = useAuthFormStore(state => state.formType)

	return formMode === 'options' ? <Options /> : <Email type={formType} />
})
