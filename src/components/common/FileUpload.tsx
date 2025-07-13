import { cn } from '@/lib/utils'
import {
  CloudArrowUpIcon,
  DocumentIcon,
  XMarkIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { useCallback, useState } from 'react'
import { Button } from './Button'

interface FileUploadProps {
  onFileChange: (files: File[]) => void
  accept?: string
  className?: string
  maxSizeMB?: number
  multiple?: boolean
  avatarMode?: boolean
  shape?: 'circle' | 'rounded'
  defaultImage?: string
}

export const FileUpload = ({
  onFileChange,
  accept = '*',
  className,
  maxSizeMB = 5,
  multiple = false,
  avatarMode = false,
  shape = 'rounded',
  defaultImage,
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultImage || null)

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    else if (e.type === 'dragleave') setDragActive(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files)
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files)
  }, [])

  const handleFiles = (fileList: FileList) => {
    const newFiles: File[] = Array.from(fileList)
    const validatedFiles = newFiles.filter((file) => {
      const isValid = file.size <= maxSizeMB * 1024 * 1024
      if (!isValid) {
        setError(`File ${file.name} exceeds ${maxSizeMB}MB limit`)
      }
      return isValid
    })

    if (validatedFiles.length === 0) return

    const allFiles = multiple ? [...files, ...validatedFiles] : validatedFiles
    setFiles(allFiles)
    setError(null)
    onFileChange(allFiles)

    if (!multiple && validatedFiles[0]?.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(validatedFiles[0]))
    }
  }

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    onFileChange(updated)
    if (!multiple) setPreviewUrl(null)
  }

  const isImage = (file: File) => file.type.startsWith('image/')

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg'

  if (avatarMode) {
    return (
      <div className={cn('relative w-32 h-32 group', className)}>
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <input
            id="avatar-upload"
            name="avatar-upload"
            type="file"
            accept={accept}
            onChange={handleChange}
            className="hidden"
            multiple={multiple}
          />
          <div
            className={cn(
              'w-full h-full border-2 border-dashed border-gray-300 overflow-hidden flex items-center justify-center bg-gray-100 transition hover:border-blue-500',
              shapeClass
            )}
          >
            {previewUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className={cn('object-cover w-full h-full', shapeClass)}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <PencilIcon className="h-5 w-5 text-white" />
                </div>
              </div>
            ) : (
              <CloudArrowUpIcon className="h-8 w-8 text-gray-400" />
            )}
          </div>
        </label>
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>
    )
  }

  return (
    <div className={cn('space-y-2', className)}>
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition-colors',
          dragActive ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4 flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
          >
            <span>{multiple ? 'Upload files' : 'Upload a file'}</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={handleChange}
              accept={accept}
              multiple={multiple}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">
          {accept !== '*'
            ? `${accept.toUpperCase()} up to ${maxSizeMB}MB`
            : `Any file up to ${maxSizeMB}MB`}
        </p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center border rounded p-2"
            >
              {isImage(file) ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="h-20 w-20 object-cover rounded"
                />
              ) : (
                <DocumentIcon className="h-10 w-10 text-gray-500" />
              )}
              <Button
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 p-1 text-red-600 hover:text-red-800"
              >
                <XMarkIcon className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
