package com.gajamy.ChzzkHub.domain.user.entity;

import com.gajamy.ChzzkHub.domain.BaseEntity;
import com.gajamy.ChzzkHub.domain.friend.entity.FriendRequest;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class Users extends BaseEntity {
    @Id
    private String id;

    private String profile;

    @Column(nullable = false)
    private int followers;

    @OneToMany(mappedBy = "toId", cascade = CascadeType.ALL)
    private List<FriendRequest> friendRequests;
}
