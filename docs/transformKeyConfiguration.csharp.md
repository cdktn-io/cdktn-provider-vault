# `transformKeyConfiguration` Submodule <a name="`transformKeyConfiguration` Submodule" id="@cdktn/provider-vault.transformKeyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformKeyConfiguration <a name="TransformKeyConfiguration" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration vault_transform_key_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformKeyConfiguration(Construct Scope, string Id, TransformKeyConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig">TransformKeyConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig">TransformKeyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetAutoRotatePeriod"></a>

```csharp
private void ResetAutoRotatePeriod()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetMinDecryptionVersion"></a>

```csharp
private void ResetMinDecryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformKeyConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformKeyConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformKeyConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformKeyConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformKeyConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformKeyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransformKeyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.path">Path</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minAvailableVersion"></a>

```csharp
public double MinAvailableVersion { get; }
```

- *Type:* double

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriodInput"></a>

```csharp
public double AutoRotatePeriodInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersionInput"></a>

```csharp
public double MinDecryptionVersionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformKeyConfigurationConfig <a name="TransformKeyConfigurationConfig" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformKeyConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Path,
    double AutoRotatePeriod = null,
    string Id = null,
    double MinDecryptionVersion = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name of the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.path">Path</a></code> | <code>string</code> | The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | Minimum key version that vault uses to decode values for the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#name TransformKeyConfiguration#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#path TransformKeyConfiguration#path}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; set; }
```

- *Type:* double

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#auto_rotate_period TransformKeyConfiguration#auto_rotate_period}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; set; }
```

- *Type:* double

Minimum key version that vault uses to decode values for the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#min_decryption_version TransformKeyConfiguration#min_decryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#namespace TransformKeyConfiguration#namespace}

---



