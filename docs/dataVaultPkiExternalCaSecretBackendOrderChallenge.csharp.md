# `dataVaultPkiExternalCaSecretBackendOrderChallenge` Submodule <a name="`dataVaultPkiExternalCaSecretBackendOrderChallenge` Submodule" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiExternalCaSecretBackendOrderChallenge <a name="DataVaultPkiExternalCaSecretBackendOrderChallenge" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge vault_pki_external_ca_secret_backend_order_challenge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPkiExternalCaSecretBackendOrderChallenge(Construct Scope, string Id, DataVaultPkiExternalCaSecretBackendOrderChallengeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig">DataVaultPkiExternalCaSecretBackendOrderChallengeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig">DataVaultPkiExternalCaSecretBackendOrderChallengeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPkiExternalCaSecretBackendOrderChallenge resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiExternalCaSecretBackendOrderChallenge.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiExternalCaSecretBackendOrderChallenge.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiExternalCaSecretBackendOrderChallenge.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiExternalCaSecretBackendOrderChallenge.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultPkiExternalCaSecretBackendOrderChallenge resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiExternalCaSecretBackendOrderChallenge to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiExternalCaSecretBackendOrderChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPkiExternalCaSecretBackendOrderChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.keyAuthorization">KeyAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeTypeInput">ChallengeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderIdInput">OrderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeType">ChallengeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAuthorization`<sup>Required</sup> <a name="KeyAuthorization" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.keyAuthorization"></a>

```csharp
public string KeyAuthorization { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `ChallengeTypeInput`<sup>Optional</sup> <a name="ChallengeTypeInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeTypeInput"></a>

```csharp
public string ChallengeTypeInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderIdInput"></a>

```csharp
public string OrderIdInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `ChallengeType`<sup>Required</sup> <a name="ChallengeType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeType"></a>

```csharp
public string ChallengeType { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiExternalCaSecretBackendOrderChallengeConfig <a name="DataVaultPkiExternalCaSecretBackendOrderChallengeConfig" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPkiExternalCaSecretBackendOrderChallengeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChallengeType,
    string Identifier,
    string Mount,
    string OrderId,
    string RoleName,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.challengeType">ChallengeType</a></code> | <code>string</code> | The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.identifier">Identifier</a></code> | <code>string</code> | The identifier (domain name) for which to retrieve the challenge. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.orderId">OrderId</a></code> | <code>string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChallengeType`<sup>Required</sup> <a name="ChallengeType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.challengeType"></a>

```csharp
public string ChallengeType { get; set; }
```

- *Type:* string

The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#challenge_type DataVaultPkiExternalCaSecretBackendOrderChallenge#challenge_type}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The identifier (domain name) for which to retrieve the challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#identifier DataVaultPkiExternalCaSecretBackendOrderChallenge#identifier}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#mount DataVaultPkiExternalCaSecretBackendOrderChallenge#mount}

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.orderId"></a>

```csharp
public string OrderId { get; set; }
```

- *Type:* string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#order_id DataVaultPkiExternalCaSecretBackendOrderChallenge#order_id}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#role_name DataVaultPkiExternalCaSecretBackendOrderChallenge#role_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#namespace DataVaultPkiExternalCaSecretBackendOrderChallenge#namespace}

---



