# `dataVaultGcpkmsVerify` Submodule <a name="`dataVaultGcpkmsVerify` Submodule" id="@cdktn/provider-vault.dataVaultGcpkmsVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGcpkmsVerify <a name="DataVaultGcpkmsVerify" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify vault_gcpkms_verify}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultGcpkmsVerify(Construct Scope, string Id, DataVaultGcpkmsVerifyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig">DataVaultGcpkmsVerifyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig">DataVaultGcpkmsVerifyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultGcpkmsVerify.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultGcpkmsVerify.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultGcpkmsVerify.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultGcpkmsVerify.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultGcpkmsVerify to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultGcpkmsVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultGcpkmsVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid">Valid</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput">DigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput">KeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion">KeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature">Signature</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid"></a>

```csharp
public IResolvable Valid { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput"></a>

```csharp
public string DigestInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput"></a>

```csharp
public double KeyVersionInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion"></a>

```csharp
public double KeyVersion { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGcpkmsVerifyConfig <a name="DataVaultGcpkmsVerifyConfig" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultGcpkmsVerifyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Digest,
    string KeyName,
    double KeyVersion,
    string Mount,
    string Signature,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest">Digest</a></code> | <code>string</code> | Base64-encoded digest to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName">KeyName</a></code> | <code>string</code> | Name of the Vault key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion">KeyVersion</a></code> | <code>double</code> | Version of the key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature">Signature</a></code> | <code>string</code> | Base64-encoded signature to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest"></a>

```csharp
public string Digest { get; set; }
```

- *Type:* string

Base64-encoded digest to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#digest DataVaultGcpkmsVerify#digest}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Name of the Vault key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_name DataVaultGcpkmsVerify#key_name}

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion"></a>

```csharp
public double KeyVersion { get; set; }
```

- *Type:* double

Version of the key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_version DataVaultGcpkmsVerify#key_version}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#mount DataVaultGcpkmsVerify#mount}

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Base64-encoded signature to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#signature DataVaultGcpkmsVerify#signature}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#namespace DataVaultGcpkmsVerify#namespace}

---



