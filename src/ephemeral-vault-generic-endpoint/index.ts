/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultGenericEndpointConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * JSON-encoded data to write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}
  */
  readonly dataJson: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path to the Vault endpoint that will be written
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}
  */
  readonly path: string;
  /**
  * The TTL for the wrapped response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}
  */
  readonly pathWrapTtl?: string;
  /**
  * Top-level fields returned by the write operation to extract and expose via write_data/write_data_json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}
  */
  readonly writeFields?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint}
*/
export class EphemeralVaultGenericEndpoint extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_generic_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultGenericEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultGenericEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_generic_endpoint',
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
    this._dataJson = config.dataJson;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._path = config.path;
    this._pathWrapTtl = config.pathWrapTtl;
    this._writeFields = config.writeFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_json - computed: false, optional: false, required: true
  private _dataJson?: string; 
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }
  public set dataJson(value: string) {
    this._dataJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJsonInput() {
    return this._dataJson;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_wrap_ttl - computed: false, optional: true, required: false
  private _pathWrapTtl?: string; 
  public get pathWrapTtl() {
    return this.getStringAttribute('path_wrap_ttl');
  }
  public set pathWrapTtl(value: string) {
    this._pathWrapTtl = value;
  }
  public resetPathWrapTtl() {
    this._pathWrapTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathWrapTtlInput() {
    return this._pathWrapTtl;
  }

  // write_data - computed: true, optional: false, required: false
  private _writeData = new cdktn.StringMap(this, "write_data");
  public get writeData() {
    return this._writeData;
  }

  // write_data_json - computed: true, optional: false, required: false
  public get writeDataJson() {
    return this.getStringAttribute('write_data_json');
  }

  // write_fields - computed: false, optional: true, required: false
  private _writeFields?: string[]; 
  public get writeFields() {
    return this.getListAttribute('write_fields');
  }
  public set writeFields(value: string[]) {
    this._writeFields = value;
  }
  public resetWriteFields() {
    this._writeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeFieldsInput() {
    return this._writeFields;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_json: cdktn.stringToTerraform(this._dataJson),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      path_wrap_ttl: cdktn.stringToTerraform(this._pathWrapTtl),
      write_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._writeFields),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_json: {
        value: cdktn.stringToHclTerraform(this._dataJson),
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_wrap_ttl: {
        value: cdktn.stringToHclTerraform(this._pathWrapTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_fields: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._writeFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
