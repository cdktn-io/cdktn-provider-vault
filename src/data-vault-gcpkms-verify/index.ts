/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataVaultGcpkmsVerifyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Base64-encoded digest to verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#digest DataVaultGcpkmsVerify#digest}
  */
  readonly digest: string;
  /**
  * Name of the Vault key to use for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_name DataVaultGcpkmsVerify#key_name}
  */
  readonly keyName: string;
  /**
  * Version of the key to use for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_version DataVaultGcpkmsVerify#key_version}
  */
  readonly keyVersion: number;
  /**
  * Path where the GCP KMS secrets engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#mount DataVaultGcpkmsVerify#mount}
  */
  readonly mount: string;
  /**
  * Target namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#namespace DataVaultGcpkmsVerify#namespace}
  */
  readonly namespace?: string;
  /**
  * Base64-encoded signature to verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#signature DataVaultGcpkmsVerify#signature}
  */
  readonly signature: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify vault_gcpkms_verify}
*/
export class DataVaultGcpkmsVerify extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcpkms_verify";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultGcpkmsVerify to import
  * @param importFromId The id of the existing DataVaultGcpkmsVerify that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultGcpkmsVerify to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_gcpkms_verify", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify vault_gcpkms_verify} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultGcpkmsVerifyConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultGcpkmsVerifyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcpkms_verify',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digest = config.digest;
    this._keyName = config.keyName;
    this._keyVersion = config.keyVersion;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._signature = config.signature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_version - computed: false, optional: false, required: true
  private _keyVersion?: number; 
  public get keyVersion() {
    return this.getNumberAttribute('key_version');
  }
  public set keyVersion(value: number) {
    this._keyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
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

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest: cdktn.stringToTerraform(this._digest),
      key_name: cdktn.stringToTerraform(this._keyName),
      key_version: cdktn.numberToTerraform(this._keyVersion),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      signature: cdktn.stringToTerraform(this._signature),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest: {
        value: cdktn.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktn.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_version: {
        value: cdktn.numberToHclTerraform(this._keyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      signature: {
        value: cdktn.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
