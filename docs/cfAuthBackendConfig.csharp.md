# `cfAuthBackendConfig` Submodule <a name="`cfAuthBackendConfig` Submodule" id="@cdktn/provider-vault.cfAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendConfig <a name="CfAuthBackendConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new CfAuthBackendConfig(Construct Scope, string Id, CfAuthBackendConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig">CfAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig">CfAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates">ResetCfApiTrustedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout">ResetCfTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter">ResetLoginMaxSecondsNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore">ResetLoginMaxSecondsNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCfApiTrustedCertificates` <a name="ResetCfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates"></a>

```csharp
private void ResetCfApiTrustedCertificates()
```

##### `ResetCfTimeout` <a name="ResetCfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout"></a>

```csharp
private void ResetCfTimeout()
```

##### `ResetLoginMaxSecondsNotAfter` <a name="ResetLoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter"></a>

```csharp
private void ResetLoginMaxSecondsNotAfter()
```

##### `ResetLoginMaxSecondsNotBefore` <a name="ResetLoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore"></a>

```csharp
private void ResetLoginMaxSecondsNotBefore()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

CfAuthBackendConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

CfAuthBackendConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

CfAuthBackendConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

CfAuthBackendConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfAuthBackendConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput">CfApiAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput">CfApiTrustedCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput">CfPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersionInput">CfPasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput">CfTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput">CfUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput">IdentityCaCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput">LoginMaxSecondsNotAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput">LoginMaxSecondsNotBeforeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr">CfApiAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates">CfApiTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo">CfPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersion">CfPasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout">CfTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername">CfUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates">IdentityCaCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter">LoginMaxSecondsNotAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore">LoginMaxSecondsNotBefore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CfApiAddrInput`<sup>Optional</sup> <a name="CfApiAddrInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput"></a>

```csharp
public string CfApiAddrInput { get; }
```

- *Type:* string

---

##### `CfApiTrustedCertificatesInput`<sup>Optional</sup> <a name="CfApiTrustedCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput"></a>

```csharp
public string[] CfApiTrustedCertificatesInput { get; }
```

- *Type:* string[]

---

##### `CfPasswordWoInput`<sup>Optional</sup> <a name="CfPasswordWoInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput"></a>

```csharp
public string CfPasswordWoInput { get; }
```

- *Type:* string

---

##### `CfPasswordWoVersionInput`<sup>Optional</sup> <a name="CfPasswordWoVersionInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersionInput"></a>

```csharp
public double CfPasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `CfTimeoutInput`<sup>Optional</sup> <a name="CfTimeoutInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput"></a>

```csharp
public double CfTimeoutInput { get; }
```

- *Type:* double

---

##### `CfUsernameInput`<sup>Optional</sup> <a name="CfUsernameInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput"></a>

```csharp
public string CfUsernameInput { get; }
```

- *Type:* string

---

##### `IdentityCaCertificatesInput`<sup>Optional</sup> <a name="IdentityCaCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput"></a>

```csharp
public string[] IdentityCaCertificatesInput { get; }
```

- *Type:* string[]

---

##### `LoginMaxSecondsNotAfterInput`<sup>Optional</sup> <a name="LoginMaxSecondsNotAfterInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput"></a>

```csharp
public double LoginMaxSecondsNotAfterInput { get; }
```

- *Type:* double

---

##### `LoginMaxSecondsNotBeforeInput`<sup>Optional</sup> <a name="LoginMaxSecondsNotBeforeInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput"></a>

```csharp
public double LoginMaxSecondsNotBeforeInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CfApiAddr`<sup>Required</sup> <a name="CfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr"></a>

```csharp
public string CfApiAddr { get; }
```

- *Type:* string

---

##### `CfApiTrustedCertificates`<sup>Required</sup> <a name="CfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates"></a>

```csharp
public string[] CfApiTrustedCertificates { get; }
```

- *Type:* string[]

---

##### `CfPasswordWo`<sup>Required</sup> <a name="CfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo"></a>

```csharp
public string CfPasswordWo { get; }
```

- *Type:* string

---

##### `CfPasswordWoVersion`<sup>Required</sup> <a name="CfPasswordWoVersion" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersion"></a>

```csharp
public double CfPasswordWoVersion { get; }
```

- *Type:* double

---

##### `CfTimeout`<sup>Required</sup> <a name="CfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout"></a>

```csharp
public double CfTimeout { get; }
```

- *Type:* double

---

##### `CfUsername`<sup>Required</sup> <a name="CfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername"></a>

```csharp
public string CfUsername { get; }
```

- *Type:* string

---

##### `IdentityCaCertificates`<sup>Required</sup> <a name="IdentityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates"></a>

```csharp
public string[] IdentityCaCertificates { get; }
```

- *Type:* string[]

---

##### `LoginMaxSecondsNotAfter`<sup>Required</sup> <a name="LoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter"></a>

```csharp
public double LoginMaxSecondsNotAfter { get; }
```

- *Type:* double

---

##### `LoginMaxSecondsNotBefore`<sup>Required</sup> <a name="LoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore"></a>

```csharp
public double LoginMaxSecondsNotBefore { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendConfigConfig <a name="CfAuthBackendConfigConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new CfAuthBackendConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CfApiAddr,
    string CfPasswordWo,
    double CfPasswordWoVersion,
    string CfUsername,
    string[] IdentityCaCertificates,
    string Mount,
    string[] CfApiTrustedCertificates = null,
    double CfTimeout = null,
    double LoginMaxSecondsNotAfter = null,
    double LoginMaxSecondsNotBefore = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr">CfApiAddr</a></code> | <code>string</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo">CfPasswordWo</a></code> | <code>string</code> | The password for authenticating to the CF API. This attribute is write-only and is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWoVersion">CfPasswordWoVersion</a></code> | <code>double</code> | Version counter for 'cf_password_wo'. Increment this value to trigger an update when only the write-only password changes. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername">CfUsername</a></code> | <code>string</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates">IdentityCaCertificates</a></code> | <code>string[]</code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates">CfApiTrustedCertificates</a></code> | <code>string[]</code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout">CfTimeout</a></code> | <code>double</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter">LoginMaxSecondsNotAfter</a></code> | <code>double</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore">LoginMaxSecondsNotBefore</a></code> | <code>double</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CfApiAddr`<sup>Required</sup> <a name="CfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr"></a>

```csharp
public string CfApiAddr { get; set; }
```

- *Type:* string

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `CfPasswordWo`<sup>Required</sup> <a name="CfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo"></a>

```csharp
public string CfPasswordWo { get; set; }
```

- *Type:* string

The password for authenticating to the CF API. This attribute is write-only and is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `CfPasswordWoVersion`<sup>Required</sup> <a name="CfPasswordWoVersion" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWoVersion"></a>

```csharp
public double CfPasswordWoVersion { get; set; }
```

- *Type:* double

Version counter for 'cf_password_wo'. Increment this value to trigger an update when only the write-only password changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#cf_password_wo_version CfAuthBackendConfig#cf_password_wo_version}

---

##### `CfUsername`<sup>Required</sup> <a name="CfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername"></a>

```csharp
public string CfUsername { get; set; }
```

- *Type:* string

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `IdentityCaCertificates`<sup>Required</sup> <a name="IdentityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates"></a>

```csharp
public string[] IdentityCaCertificates { get; set; }
```

- *Type:* string[]

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `CfApiTrustedCertificates`<sup>Optional</sup> <a name="CfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates"></a>

```csharp
public string[] CfApiTrustedCertificates { get; set; }
```

- *Type:* string[]

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `CfTimeout`<sup>Optional</sup> <a name="CfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout"></a>

```csharp
public double CfTimeout { get; set; }
```

- *Type:* double

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `LoginMaxSecondsNotAfter`<sup>Optional</sup> <a name="LoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter"></a>

```csharp
public double LoginMaxSecondsNotAfter { get; set; }
```

- *Type:* double

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `LoginMaxSecondsNotBefore`<sup>Optional</sup> <a name="LoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore"></a>

```csharp
public double LoginMaxSecondsNotBefore { get; set; }
```

- *Type:* double

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---



