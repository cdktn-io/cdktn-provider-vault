/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultKerberosAuthBackendLoginConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Disable FAST negotiation. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#disable_fast_negotiation EphemeralVaultKerberosAuthBackendLogin#disable_fast_negotiation}
  */
  readonly disableFastNegotiation?: boolean | cdktn.IResolvable;
  /**
  * Path to the keytab file for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#keytab_path EphemeralVaultKerberosAuthBackendLogin#keytab_path}
  */
  readonly keytabPath: string;
  /**
  * Path to the krb5.conf configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#krb5conf_path EphemeralVaultKerberosAuthBackendLogin#krb5conf_path}
  */
  readonly krb5ConfPath: string;
  /**
  * Path where the Kerberos auth method is mounted. Defaults to 'kerberos'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount EphemeralVaultKerberosAuthBackendLogin#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount_id EphemeralVaultKerberosAuthBackendLogin#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#namespace EphemeralVaultKerberosAuthBackendLogin#namespace}
  */
  readonly namespace?: string;
  /**
  * Kerberos realm name. Must match the UPNDomain in LDAP config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#realm EphemeralVaultKerberosAuthBackendLogin#realm}
  */
  readonly realm: string;
  /**
  * Remove instance name from principal. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#remove_instance_name EphemeralVaultKerberosAuthBackendLogin#remove_instance_name}
  */
  readonly removeInstanceName?: boolean | cdktn.IResolvable;
  /**
  * Service principal name for obtaining a service ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#service EphemeralVaultKerberosAuthBackendLogin#service}
  */
  readonly service: string;
  /**
  * Username for the keytab entry. Must match a service account in LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#username EphemeralVaultKerberosAuthBackendLogin#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login vault_kerberos_auth_backend_login}
*/
export class EphemeralVaultKerberosAuthBackendLogin extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kerberos_auth_backend_login";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login vault_kerberos_auth_backend_login} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultKerberosAuthBackendLoginConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultKerberosAuthBackendLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kerberos_auth_backend_login',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._disableFastNegotiation = config.disableFastNegotiation;
    this._keytabPath = config.keytabPath;
    this._krb5ConfPath = config.krb5ConfPath;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._realm = config.realm;
    this._removeInstanceName = config.removeInstanceName;
    this._service = config.service;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // disable_fast_negotiation - computed: false, optional: true, required: false
  private _disableFastNegotiation?: boolean | cdktn.IResolvable; 
  public get disableFastNegotiation() {
    return this.getBooleanAttribute('disable_fast_negotiation');
  }
  public set disableFastNegotiation(value: boolean | cdktn.IResolvable) {
    this._disableFastNegotiation = value;
  }
  public resetDisableFastNegotiation() {
    this._disableFastNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFastNegotiationInput() {
    return this._disableFastNegotiation;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // identity_policies - computed: true, optional: false, required: false
  public get identityPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_policies'));
  }

  // keytab_path - computed: false, optional: false, required: true
  private _keytabPath?: string; 
  public get keytabPath() {
    return this.getStringAttribute('keytab_path');
  }
  public set keytabPath(value: string) {
    this._keytabPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabPathInput() {
    return this._keytabPath;
  }

  // krb5conf_path - computed: false, optional: false, required: true
  private _krb5ConfPath?: string; 
  public get krb5ConfPath() {
    return this.getStringAttribute('krb5conf_path');
  }
  public set krb5ConfPath(value: string) {
    this._krb5ConfPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfPathInput() {
    return this._krb5ConfPath;
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktn.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // orphan - computed: true, optional: false, required: false
  public get orphan() {
    return this.getBooleanAttribute('orphan');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return cdktn.Fn.tolist(this.getListAttribute('policies'));
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // remove_instance_name - computed: false, optional: true, required: false
  private _removeInstanceName?: boolean | cdktn.IResolvable; 
  public get removeInstanceName() {
    return this.getBooleanAttribute('remove_instance_name');
  }
  public set removeInstanceName(value: boolean | cdktn.IResolvable) {
    this._removeInstanceName = value;
  }
  public resetRemoveInstanceName() {
    this._removeInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceNameInput() {
    return this._removeInstanceName;
  }

  // renewable - computed: true, optional: false, required: false
  public get renewable() {
    return this.getBooleanAttribute('renewable');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // token_policies - computed: true, optional: false, required: false
  public get tokenPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('token_policies'));
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_fast_negotiation: cdktn.booleanToTerraform(this._disableFastNegotiation),
      keytab_path: cdktn.stringToTerraform(this._keytabPath),
      krb5conf_path: cdktn.stringToTerraform(this._krb5ConfPath),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      realm: cdktn.stringToTerraform(this._realm),
      remove_instance_name: cdktn.booleanToTerraform(this._removeInstanceName),
      service: cdktn.stringToTerraform(this._service),
      username: cdktn.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_fast_negotiation: {
        value: cdktn.booleanToHclTerraform(this._disableFastNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keytab_path: {
        value: cdktn.stringToHclTerraform(this._keytabPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      krb5conf_path: {
        value: cdktn.stringToHclTerraform(this._krb5ConfPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      realm: {
        value: cdktn.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_instance_name: {
        value: cdktn.booleanToHclTerraform(this._removeInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: cdktn.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
