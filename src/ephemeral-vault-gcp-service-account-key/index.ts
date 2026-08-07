/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultGcpServiceAccountKeyConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}
  */
  readonly keyType?: string;
  /**
  * Mount path for the GCP Secret Backend to read credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}
  */
  readonly namespace?: string;
  /**
  * GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}
  */
  readonly roleset?: string;
  /**
  * GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}
  */
  readonly staticAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key}
*/
export class EphemeralVaultGcpServiceAccountKey extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_service_account_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultGcpServiceAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultGcpServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_service_account_key',
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
    this._keyAlgorithm = config.keyAlgorithm;
    this._keyType = config.keyType;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._roleset = config.roleset;
    this._staticAccount = config.staticAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // lease_start_time - computed: true, optional: false, required: false
  public get leaseStartTime() {
    return this.getStringAttribute('lease_start_time');
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

  // private_key_data - computed: true, optional: false, required: false
  public get privateKeyData() {
    return this.getStringAttribute('private_key_data');
  }

  // private_key_type - computed: true, optional: false, required: false
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }

  // roleset - computed: false, optional: true, required: false
  private _roleset?: string; 
  public get roleset() {
    return this.getStringAttribute('roleset');
  }
  public set roleset(value: string) {
    this._roleset = value;
  }
  public resetRoleset() {
    this._roleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesetInput() {
    return this._roleset;
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // static_account - computed: false, optional: true, required: false
  private _staticAccount?: string; 
  public get staticAccount() {
    return this.getStringAttribute('static_account');
  }
  public set staticAccount(value: string) {
    this._staticAccount = value;
  }
  public resetStaticAccount() {
    this._staticAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAccountInput() {
    return this._staticAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_algorithm: cdktn.stringToTerraform(this._keyAlgorithm),
      key_type: cdktn.stringToTerraform(this._keyType),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      roleset: cdktn.stringToTerraform(this._roleset),
      static_account: cdktn.stringToTerraform(this._staticAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_algorithm: {
        value: cdktn.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktn.stringToHclTerraform(this._keyType),
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
      roleset: {
        value: cdktn.stringToHclTerraform(this._roleset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_account: {
        value: cdktn.stringToHclTerraform(this._staticAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
