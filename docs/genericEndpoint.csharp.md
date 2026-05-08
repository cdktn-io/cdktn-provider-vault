# `genericEndpoint` Submodule <a name="`genericEndpoint` Submodule" id="@cdktn/provider-vault.genericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericEndpoint <a name="GenericEndpoint" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GenericEndpoint(Construct Scope, string Id, GenericEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig">GenericEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig">GenericEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete">ResetDisableDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead">ResetDisableRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields">ResetIgnoreAbsentFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields">ResetWriteFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableDelete` <a name="ResetDisableDelete" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete"></a>

```csharp
private void ResetDisableDelete()
```

##### `ResetDisableRead` <a name="ResetDisableRead" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead"></a>

```csharp
private void ResetDisableRead()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreAbsentFields` <a name="ResetIgnoreAbsentFields" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields"></a>

```csharp
private void ResetIgnoreAbsentFields()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetWriteFields` <a name="ResetWriteFields" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields"></a>

```csharp
private void ResetWriteFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GenericEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GenericEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GenericEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GenericEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GenericEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GenericEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenericEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenericEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GenericEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeData">WriteData</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson">WriteDataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput">DataJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput">DisableDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput">DisableReadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput">IgnoreAbsentFieldsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput">WriteFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson">DataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete">DisableDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead">DisableRead</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields">IgnoreAbsentFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields">WriteFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WriteData`<sup>Required</sup> <a name="WriteData" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeData"></a>

```csharp
public StringMap WriteData { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `WriteDataJson`<sup>Required</sup> <a name="WriteDataJson" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson"></a>

```csharp
public string WriteDataJson { get; }
```

- *Type:* string

---

##### `DataJsonInput`<sup>Optional</sup> <a name="DataJsonInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput"></a>

```csharp
public string DataJsonInput { get; }
```

- *Type:* string

---

##### `DisableDeleteInput`<sup>Optional</sup> <a name="DisableDeleteInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput"></a>

```csharp
public bool|IResolvable DisableDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableReadInput`<sup>Optional</sup> <a name="DisableReadInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput"></a>

```csharp
public bool|IResolvable DisableReadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreAbsentFieldsInput`<sup>Optional</sup> <a name="IgnoreAbsentFieldsInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput"></a>

```csharp
public bool|IResolvable IgnoreAbsentFieldsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `WriteFieldsInput`<sup>Optional</sup> <a name="WriteFieldsInput" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput"></a>

```csharp
public string[] WriteFieldsInput { get; }
```

- *Type:* string[]

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson"></a>

```csharp
public string DataJson { get; }
```

- *Type:* string

---

##### `DisableDelete`<sup>Required</sup> <a name="DisableDelete" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete"></a>

```csharp
public bool|IResolvable DisableDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableRead`<sup>Required</sup> <a name="DisableRead" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead"></a>

```csharp
public bool|IResolvable DisableRead { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreAbsentFields`<sup>Required</sup> <a name="IgnoreAbsentFields" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields"></a>

```csharp
public bool|IResolvable IgnoreAbsentFields { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `WriteFields`<sup>Required</sup> <a name="WriteFields" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields"></a>

```csharp
public string[] WriteFields { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenericEndpointConfig <a name="GenericEndpointConfig" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GenericEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataJson,
    string Path,
    bool|IResolvable DisableDelete = null,
    bool|IResolvable DisableRead = null,
    string Id = null,
    bool|IResolvable IgnoreAbsentFields = null,
    string Namespace = null,
    string[] WriteFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson">DataJson</a></code> | <code>string</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.path">Path</a></code> | <code>string</code> | Full path where to the endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete">DisableDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Don't attempt to delete the path from Vault if true. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead">DisableRead</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Don't attempt to read the path from Vault if true; drift won't be detected. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#id GenericEndpoint#id}. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields">IgnoreAbsentFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When reading, disregard fields not present in data_json. |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields">WriteFields</a></code> | <code>string[]</code> | Top-level fields returned by write to persist in state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson"></a>

```csharp
public string DataJson { get; set; }
```

- *Type:* string

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Full path where to the endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#path GenericEndpoint#path}

---

##### `DisableDelete`<sup>Optional</sup> <a name="DisableDelete" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete"></a>

```csharp
public bool|IResolvable DisableDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Don't attempt to delete the path from Vault if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}

---

##### `DisableRead`<sup>Optional</sup> <a name="DisableRead" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead"></a>

```csharp
public bool|IResolvable DisableRead { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Don't attempt to read the path from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#id GenericEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreAbsentFields`<sup>Optional</sup> <a name="IgnoreAbsentFields" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields"></a>

```csharp
public bool|IResolvable IgnoreAbsentFields { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When reading, disregard fields not present in data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}

---

##### `WriteFields`<sup>Optional</sup> <a name="WriteFields" id="@cdktn/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields"></a>

```csharp
public string[] WriteFields { get; set; }
```

- *Type:* string[]

Top-level fields returned by write to persist in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}

---



