/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultKubernetesServiceAccountTokenConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * The Kubernetes secret backend to generate service account tokens from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#backend EphemeralVaultKubernetesServiceAccountToken#backend}
  */
  readonly backend: string;
  /**
  * If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#cluster_role_binding EphemeralVaultKubernetesServiceAccountToken#cluster_role_binding}
  */
  readonly clusterRoleBinding?: boolean | cdktn.IResolvable;
  /**
  * The name of the Kubernetes namespace in which to generate the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#kubernetes_namespace EphemeralVaultKubernetesServiceAccountToken#kubernetes_namespace}
  */
  readonly kubernetesNamespace: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#mount_id EphemeralVaultKubernetesServiceAccountToken#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#namespace EphemeralVaultKubernetesServiceAccountToken#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#role EphemeralVaultKubernetesServiceAccountToken#role}
  */
  readonly role: string;
  /**
  * The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#ttl EphemeralVaultKubernetesServiceAccountToken#ttl}
  */
  readonly ttl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token vault_kubernetes_service_account_token}
*/
export class EphemeralVaultKubernetesServiceAccountToken extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_service_account_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token vault_kubernetes_service_account_token} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultKubernetesServiceAccountTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultKubernetesServiceAccountTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_service_account_token',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._clusterRoleBinding = config.clusterRoleBinding;
    this._kubernetesNamespace = config.kubernetesNamespace;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._role = config.role;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // cluster_role_binding - computed: false, optional: true, required: false
  private _clusterRoleBinding?: boolean | cdktn.IResolvable; 
  public get clusterRoleBinding() {
    return this.getBooleanAttribute('cluster_role_binding');
  }
  public set clusterRoleBinding(value: boolean | cdktn.IResolvable) {
    this._clusterRoleBinding = value;
  }
  public resetClusterRoleBinding() {
    this._clusterRoleBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleBindingInput() {
    return this._clusterRoleBinding;
  }

  // kubernetes_namespace - computed: false, optional: false, required: true
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_id - computed: true, optional: false, required: false
  public get leaseId() {
    return this.getStringAttribute('lease_id');
  }

  // lease_renewable - computed: true, optional: false, required: false
  public get leaseRenewable() {
    return this.getBooleanAttribute('lease_renewable');
  }

  // mount_id - computed: false, optional: true, required: false
  private _mountId?: string; 
  public get mountId() {
    return this.getStringAttribute('mount_id');
  }
  public set mountId(value: string) {
    this._mountId = value;
  }
  public resetMountId() {
    this._mountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountIdInput() {
    return this._mountId;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // service_account_namespace - computed: true, optional: false, required: false
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }

  // service_account_token - computed: true, optional: false, required: false
  public get serviceAccountToken() {
    return this.getStringAttribute('service_account_token');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktn.stringToTerraform(this._backend),
      cluster_role_binding: cdktn.booleanToTerraform(this._clusterRoleBinding),
      kubernetes_namespace: cdktn.stringToTerraform(this._kubernetesNamespace),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      role: cdktn.stringToTerraform(this._role),
      ttl: cdktn.stringToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_role_binding: {
        value: cdktn.booleanToHclTerraform(this._clusterRoleBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_namespace: {
        value: cdktn.stringToHclTerraform(this._kubernetesNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_id: {
        value: cdktn.stringToHclTerraform(this._mountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
