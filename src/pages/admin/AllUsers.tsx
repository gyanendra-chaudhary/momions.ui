import { useState, useEffect } from 'react';
import useUserStore from '@/stores/user.store';

import type { UserWithProfileResponse, UserSearchRequest } from '@/services/user.service';
import { Avatar } from '@/components/common/Avatar';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { Filter } from '@/components/common/Filter';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Modal } from '@/components/common/Modal';
import { Pagination } from '@/components/common/Pagination';
import { SearchBar } from '@/components/common/SearchBar';
import { Column, Table } from '@/components/common/Table';
import { Button } from '@/components/common/Button';

const AllUsers = () => {
    const {
        users,
        isLoading,
        error,
        totalCount,
        currentPage,
        pageSize,
        fetchUsers,
        toggleUserStatus,
        clearError,
        setPagination
    } = useUserStore();

    const [searchTerm, setSearchTerm] = useState('');
    // const [roleFilter, setRoleFilter] = useState<number | undefined>(2);
    const [statusFilter, setStatusFilter] = useState<boolean | undefined>(undefined);
    const [selectedUser, setSelectedUser] = useState<UserWithProfileResponse | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const request: UserSearchRequest = {
            searchTerm,
            roleId: 2,
            isActive: statusFilter,
            pageNumber: currentPage,
            pageSize
        };
        fetchUsers(request);
    }, [searchTerm, statusFilter, currentPage, pageSize, fetchUsers]);

    const handlePageChange = (page: number) => {
        setPagination(page, pageSize);
    };

    const handleStatusToggle = async (userId: number) => {
        try {
            await toggleUserStatus(userId);
        } catch (err) {
            console.error('Failed to toggle user status:', err);
        }
    };

    const columns: Column<UserWithProfileResponse>[] = [
        {
            key: 'user',  // This should be a key of UserWithProfileResponse
            header: 'User',
            render: (row: UserWithProfileResponse) => ( // Change parameter name to 'row'
                <div className="flex items-center gap-3">
                    <Avatar
                        src={row.user.photo}
                        alt={`${row.user.firstName} ${row.user.lastName}`}
                        size="md"
                    />
                    <div>
                        <p className="font-medium">{row.user.firstName} {row.user.lastName}</p>
                        <p className="text-sm text-gray-500">{row.user.email}</p>
                    </div>
                </div>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (user: UserWithProfileResponse) => (
                <Badge variant={user.user.isActive ? 'success' : 'danger'}>
                    {user.user.isActive ? 'Active' : 'Inactive'}
                </Badge>
            )
        },
        {
            key: 'lastLogin',
            header: 'Last Login',
            render: (user: UserWithProfileResponse) => (
                <span>
                    {user.user.lastLoginAt
                        ? new Date(user.user.lastLoginAt).toLocaleDateString()
                        : 'Never'}
                </span>
            )
        },
        {
            key: 'actions',
            header: 'Actions',
            render: (user: UserWithProfileResponse) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                            setSelectedUser(user);
                            setIsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        size="sm"
                        variant={user.user.isActive ? 'danger' : 'primary'}
                        onClick={() => handleStatusToggle(user.user.userId)}
                    >
                        {user.user.isActive ? 'Deactivate' : 'Activate'}
                    </Button>
                </div>
            )
        }
    ];

    if (error) {
        console.error(error);
        clearError();
    }

    return (
        <div className="space-y-6">
            {/* <h1 className="text-2xl font-bold">User Management</h1> */}

            <Card className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <SearchBar
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={setSearchTerm}
                        className="w-full md:w-64"
                    />

                    <div className="flex gap-3">
                        {/* <Filter
                            options={[
                                { value: 'all', label: 'All Roles', checked: roleFilter === undefined },
                                { value: '1', label: 'Admin', checked: roleFilter === 1 },
                                { value: '2', label: 'User', checked: roleFilter === 2 }
                            ]}
                            onChange={(value, checked) =>
                                setRoleFilter(value === 'all' || !checked ? undefined : Number(value))
                            }
                        /> */}

                        <Filter
                            options={[
                                { value: 'all', label: 'All Statuses', checked: statusFilter === undefined },
                                { value: 'active', label: 'Active', checked: statusFilter === true },
                                { value: 'inactive', label: 'Inactive', checked: statusFilter === false }
                            ]}
                            onChange={(value, checked) =>
                                setStatusFilter(value === 'all' || !checked ? undefined : value === 'active')
                            }
                        />
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <LoadingSpinner size="lg" />
                    </div>
                ) : (
                    <>
                        <Table
                            columns={columns}
                            data={users}
                            emptyState={
                                <div className="py-12 text-center">
                                    <p className="text-gray-500">No users found</p>
                                </div>
                            }
                        />

                        {totalCount > 0 && (
                            <div className="flex justify-center mt-6">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={Math.ceil(totalCount / pageSize)}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        )}
                    </>
                )}
            </Card>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="User Details"
                size="lg"
            >
                {selectedUser && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Avatar
                                src={selectedUser.user.photo}
                                alt={`${selectedUser.user.firstName} ${selectedUser.user.lastName}`}
                                size="lg"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {selectedUser.user.firstName} {selectedUser.user.lastName}
                                </h3>
                                <p className="text-gray-600">{selectedUser.user.email}</p>
                                <Badge
                                    variant={selectedUser.user.isActive ? 'success' : 'danger'}
                                    className="mt-1"
                                >
                                    {selectedUser.user.isActive ? 'Active' : 'Inactive'}
                                </Badge>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-700">Contact Information</h4>
                                <p className="mt-1">{selectedUser.user.phoneNumber || 'Not provided'}</p>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-700">Preferred Language</h4>
                                <p className="mt-1">{selectedUser.user.preferredLanguage}</p>
                            </div>

                            {selectedUser.profile && (
                                <>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Address</h4>
                                        <p className="mt-1">
                                            {selectedUser.profile.address || 'Not provided'}
                                        </p>
                                        <p className="mt-1">
                                            {selectedUser.profile.city}, {selectedUser.profile.state}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Emergency Contact</h4>
                                        <p className="mt-1">
                                            {selectedUser.profile.emergencyContact || 'Not provided'}
                                        </p>
                                        <p className="mt-1">
                                            {selectedUser.profile.emergencyPhone || 'Not provided'}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AllUsers;