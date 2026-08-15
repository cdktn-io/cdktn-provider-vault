/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultCfAuthLoginConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * The full body of the file available at the path denoted by `CF_INSTANCE_CERT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#cf_instance_cert EphemeralVaultCfAuthLogin#cf_instance_cert}
  */
  readonly cfInstanceCert: string;
  /**
  * Mount path for the CF auth engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount EphemeralVaultCfAuthLogin#mount}
  */
  readonly mount?: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount_id EphemeralVaultCfAuthLogin#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#namespace EphemeralVaultCfAuthLogin#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the CF auth role to log in with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#role EphemeralVaultCfAuthLogin#role}
  */
  readonly role: string;
  /**
  * The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signature EphemeralVaultCfAuthLogin#signature}
  */
  readonly signature: string;
  /**
  * The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signing_time EphemeralVaultCfAuthLogin#signing_time}
  */
  readonly signingTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login vault_cf_auth_login}
*/
export class EphemeralVaultCfAuthLogin extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_cf_auth_login";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login vault_cf_auth_login} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultCfAuthLoginConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultCfAuthLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_cf_auth_login',
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
    this._cfInstanceCert = config.cfInstanceCert;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._role = config.role;
    this._signature = config.signature;
    this._signingTime = config.signingTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // cf_instance_cert - computed: false, optional: false, required: true
  private _cfInstanceCert?: string; 
  public get cfInstanceCert() {
    return this.getStringAttribute('cf_instance_cert');
  }
  public set cfInstanceCert(value: string) {
    this._cfInstanceCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfInstanceCertInput() {
    return this._cfInstanceCert;
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // mount - computed: true, optional: true, required: false
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
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

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // renewable - computed: true, optional: false, required: false
  public get renewable() {
    return this.getBooleanAttribute('renewable');
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

  // signature - computed: false, optional: false, required: true
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signing_time - computed: false, optional: false, required: true
  private _signingTime?: string; 
  public get signingTime() {
    return this.getStringAttribute('signing_time');
  }
  public set signingTime(value: string) {
    this._signingTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingTimeInput() {
    return this._signingTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cf_instance_cert: cdktn.stringToTerraform(this._cfInstanceCert),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      role: cdktn.stringToTerraform(this._role),
      signature: cdktn.stringToTerraform(this._signature),
      signing_time: cdktn.stringToTerraform(this._signingTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cf_instance_cert: {
        value: cdktn.stringToHclTerraform(this._cfInstanceCert),
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
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: cdktn.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_time: {
        value: cdktn.stringToHclTerraform(this._signingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
