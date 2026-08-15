# `ephemeralVaultGcpServiceAccountKey` Submodule <a name="`ephemeralVaultGcpServiceAccountKey` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpServiceAccountKey <a name="EphemeralVaultGcpServiceAccountKey" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_service_account_key.EphemeralVaultGcpServiceAccountKey;

EphemeralVaultGcpServiceAccountKey.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
//  .keyAlgorithm(java.lang.String)
//  .keyType(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .roleset(java.lang.String)
//  .staticAccount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.roleset">roleset</a></code> | <code>java.lang.String</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.staticAccount">staticAccount</a></code> | <code>java.lang.String</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyAlgorithm"></a>

- *Type:* java.lang.String

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.roleset"></a>

- *Type:* java.lang.String

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `staticAccount`<sup>Optional</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.staticAccount"></a>

- *Type:* java.lang.String

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset">resetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount">resetStaticAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm"></a>

```java
public void resetKeyAlgorithm()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRoleset` <a name="resetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset"></a>

```java
public void resetRoleset()
```

##### `resetStaticAccount` <a name="resetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount"></a>

```java
public void resetStaticAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_service_account_key.EphemeralVaultGcpServiceAccountKey;

EphemeralVaultGcpServiceAccountKey.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_service_account_key.EphemeralVaultGcpServiceAccountKey;

EphemeralVaultGcpServiceAccountKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_service_account_key.EphemeralVaultGcpServiceAccountKey;

EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable">leaseRenewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime">leaseStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData">privateKeyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType">privateKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput">rolesetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput">staticAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset">roleset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount">staticAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable"></a>

```java
public IResolvable getLeaseRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime"></a>

```java
public java.lang.String getLeaseStartTime();
```

- *Type:* java.lang.String

---

##### `privateKeyData`<sup>Required</sup> <a name="privateKeyData" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData"></a>

```java
public java.lang.String getPrivateKeyData();
```

- *Type:* java.lang.String

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType"></a>

```java
public java.lang.String getPrivateKeyType();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `rolesetInput`<sup>Optional</sup> <a name="rolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput"></a>

```java
public java.lang.String getRolesetInput();
```

- *Type:* java.lang.String

---

##### `staticAccountInput`<sup>Optional</sup> <a name="staticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput"></a>

```java
public java.lang.String getStaticAccountInput();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset"></a>

```java
public java.lang.String getRoleset();
```

- *Type:* java.lang.String

---

##### `staticAccount`<sup>Required</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount"></a>

```java
public java.lang.String getStaticAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpServiceAccountKeyConfig <a name="EphemeralVaultGcpServiceAccountKeyConfig" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_service_account_key.EphemeralVaultGcpServiceAccountKeyConfig;

EphemeralVaultGcpServiceAccountKeyConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
//  .keyAlgorithm(java.lang.String)
//  .keyType(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .roleset(java.lang.String)
//  .staticAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset">roleset</a></code> | <code>java.lang.String</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount">staticAccount</a></code> | <code>java.lang.String</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset"></a>

```java
public java.lang.String getRoleset();
```

- *Type:* java.lang.String

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `staticAccount`<sup>Optional</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount"></a>

```java
public java.lang.String getStaticAccount();
```

- *Type:* java.lang.String

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---



